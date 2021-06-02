class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/classrooms/)

      classrooms = Classroom.all.map do |classroom|
        {id: classroom.id, name: classroom.name, teacher: teachers.last_name}
      end

      return [200, { 'Content-Type' => 'application/json' }, [ {:classrooms => classrooms}.to_json ]]

    else
      resp.write "Path Not Found"

    end

    if req.path.match(/students/) && req.get?
      students = Student.all.map do |student|
        {id: student.id, first_name: first_name.student, last_name: last_name.student, age: age.student, teacher: teachers.last_name, classroom: classroom.name}
      end
      return [200, { 'Content-Type' => 'application/json' }, [ {:students => students}.to_json ]]

    elsif req.path.match(/students/) && req.post?

      data = JSON.parse req.body.read
      classrooms = Classroom.find_by(name: data["classroom"])
      teacher = Teacher.find_by(last_name: data ["teacher"])
      student = Student.create()

      res_student =  {id: student.id, first_name: first_name.student, last_name: last_name.student, age: age.student, teacher: teachers.last_name, classroom: classroom.name}

      return [200, { 'Content-Type' => 'application/json' }, [ {:students => students}.to_json ]]

    elsif req.delete?
      id = req.path.split("/student/").last
      Student.find(id).delete

      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "Student deleted!"}.to_json ]]

    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
