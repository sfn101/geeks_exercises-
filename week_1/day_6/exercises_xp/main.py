from flask import Flask, jsonify, request

students = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "age": 20,
        "gender": "male",
    },
    {
        "id": 2,
        "name": "Jane Doe",
        "email": "jane.doe@example.com",
        "age": 21,
        "gender": "female",
    },
    {
        "id": 3,
        "name": "Jim Doe",
        "email": "jim.doe@example.com",
        "age": 22,
        "gender": "male",
    },
    {
        "id": 4,
        "name": "Jill Doe",
        "email": "jill.doe@example.com",
        "age": 23,
        "gender": "female",
    },
    {
        "id": 5,
        "name": "Jack Doe",
        "email": "jack.doe@example.com",
        "age": 24,
        "gender": "male",
    }
]

main = Flask(__name__)


@main.route("/", methods=["GET"])
def home():
    return "Hello, World!"

@main.route("/students", methods=["GET"])
def get_students():
    page = int(request.args.get('page', 1))
    limit = int(request.args.get('limit', 99))
    start = (page - 1) * limit
    end = start + limit
    return jsonify(students[start:end])

@main.route("/students/<int:student_id>", methods=["GET"])
def get_student(student_id):
    try:
        student = next((s for s in students if s["id"] == student_id), None)
        return jsonify(student) if student else ("", 404)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

@main.route("/students", methods=["POST"])
def add_student():
    try:
        new_student = request.get_json()
        students.append(new_student)
        return jsonify(new_student), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@main.route("/students/<int:student_id>", methods=["PUT"])
def update_student(student_id):
    try:
        student = next((s for s in students if s["id"] == student_id), None)
        if not student:
            return "", 404
        updated_data = request.get_json()
        student.update(updated_data)
        return jsonify(student)
    except Exception as e:
        return jsonify({"error": str(e)}), 500 
    
    
@main.route("/students/<int:student_id>", methods=["DELETE"])
def delete_student(student_id):
    try:
        global students
        students = [s for s in students if s["id"] != student_id]
        return "", 204
    except Exception as e:
        return jsonify({"error": str(e)}), 500 

if __name__ == "__main__":
    main.run(debug=True)