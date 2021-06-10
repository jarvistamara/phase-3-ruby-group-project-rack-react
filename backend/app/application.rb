class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/test/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "test response!"}.to_json ]]
    elsif req.path.match(/students/)

      if req.env["REQUEST_METHOD"] == "POST"
        input = JSON.parse(req.body.read)
        classroom_id = req.path.split("/classrooms/").last.split("/students").last
        classroom = Classroom.find_by(id: classroom_id)
        student = classroom.students.create(first_name: input["first_name"], last_name: input["last_name"], age: input["age"])
        return [200, { 'Content-Type' => 'application/json' }, [  student.to_json ]]

      elsif req.env["REQUEST_METHOD"] == "DELETE"
        # binding.pry
        classroom_id = req.path.split("/classrooms/").last.split("/students/").first
        classroom = Classroom.find_by(id: classroom_id)
        student_id = req.path.split('/students/').last
        deleted_student = classroom.students.find_by(id: student_id)
        # binding.pry
        deleted_student.destroy
        return [200, { 'Content-Type' => 'application/json' }, [{:message => "student deleted"}.to_json ]]

      elsif req.env["REQUEST_METHOD"] == "PATCH"
        # find student by id 
        # binding.pry
        input = JSON.parse(req.body.read)
        classroom_id = req.path.split("/classrooms/").last.split("/students/").first
        classroom = Classroom.find_by(id: classroom_id)
        student_id = req.path.split('/students/').last
        student = classroom.students.find_by(id: student_id)
        updated_student = student.update(first_name: input["first_name"], last_name: input["last_name"], age: input["age"])
        return [200, { 'Content-Type' => 'application/json' }, [  student.to_json ]]
      end 
    elsif req.path.match(/classrooms/)
      if req.env["REQUEST_METHOD"] == "POST"
        input = JSON.parse(req.body.read)
        classroom = Classroom.create(title: input['title'], teacher_name: input['teacher_name'])
        return [200, { 'Content-Type' => 'application/json' }, [ classroom.to_json ]]
      else
      if req.path.split("/classrooms").length == 0
        return [200, { 'Content-Type' => 'application/json' }, [ Classroom.all.to_json ]]
      else 
        classroom_id = req.path.split("/classrooms/").last 
        return [200, { 'Content-Type' => 'application/json' }, [ Classroom.find_by(id: classroom_id).to_json({:include => :students}) ]]
      end
    end
    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
