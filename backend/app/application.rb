class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/test/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "test response!"}.to_json ]]
    elsif req.path.match(/classrooms/)
      if req.path.split("/classrooms").length == 0
        return [200, { 'Content-Type' => 'application/json' }, [ Classroom.all.to_json ]]
      else 
        classroom_id = req.path.split("/classrooms/").last 
 
        return [200, { 'Content-Type' => 'application/json' }, [ Classroom.find_by(id: classroom_id).to_json({:include => :students}) ]]
      end
    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
