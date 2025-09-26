import os
from psycopg2 import connect
from dotenv import load_dotenv
from contextlib import contextmanager
import requests
import random

load_dotenv()

@contextmanager
def get_db_connection():
    conn = connect(
        dbname=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT")
    )
    try:
        yield conn
    finally:
        conn.close()
        
def countries_name_generator():
    """Fetches countries data from the REST Countries API and returns 10 random 
    countries"""
    try:
        response = requests.get("https://restcountries.com/v3.1/all?fields=name,capital,flags,subregion,population")
        response.raise_for_status()
        countries_data_raw = response.json()
        random_countries = random.sample(countries_data_raw, 10)
        formatted_countries = []
        for country in random_countries:
            country_info = {
                "name": country.get("name", {}).get("common", "N/A"),
                "capital": country.get("capital", ["N/A"])[0],
                "flag": country.get("flags", {}).get("png", "N/A"),
                "subregion": country.get("subregion", "N/A"),
                "population": country.get("population", 0)
            }
            formatted_countries.append(country_info)
        return formatted_countries
    except requests.RequestException as e:
        print(f"Error fetching countries data: {e}")
        raise e
def insert_countries_to_db(countries):
    """Inserts a list of countries into the PostgreSQL database."""
    try:
        with get_db_connection() as conn:
            with conn.cursor() as cursor:
                for country in countries:
                    cursor.execute("SELECT 1 FROM countries WHERE name = %s", (country["name"],))
                    if cursor.fetchone():
                        print(f"Country {country['name']} already exists in the database. Skipping insertion.")
                        continue
                    cursor.execute(
                        """
                        INSERT INTO countries (name, capital, subregion, population, flag)
                        VALUES (%s, %s, %s, %s, %s)
                        """,
                        (country["name"], country["capital"], country["subregion"], country["population"], country["flag"])
                    )
                conn.commit()
                print("Countries inserted successfully.")
    except Exception as e:
        print(f"Error inserting countries into database: {e}")
        raise e
            

if __name__ == "__main__":
    countries = countries_name_generator()
    insert_countries_to_db(countries)