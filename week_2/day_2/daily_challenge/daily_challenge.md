## Q1. What will be the OUTPUT of the following statement?

```sql
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
```

### A1. It will return 0 because in SecondTab we return only NULL


## Q2. What will be the OUTPUT of the following statement?

```sql
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
```

### A2. It will return 2


## Q3. What will be the OUTPUT of the following statement?
```sql
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
```

### A3. It will return the same 0 because the subquery has a NULL value


## Q4. What will be the OUTPUT of the following statement?
```sql
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
```

### A4. It will return 2 because we filter the NULL
