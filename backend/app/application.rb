class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)
      binding.pry
    if req.path.match(/test/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "test response!"}.to_json ]]
        # first route, access to all classrooms
    
      elsif req.path.match(/classrooms/)
      if req.path.split("/classrooms").length == 0 
        # if there is no id, then this will return 200
      
        return [200, { 'Content-Type' => 'application/json' }, [ Classroom.all.to_json ]]
      else classroom_id = req.path.split("/classroom/").last 
        #else it has an id so it needs to request only one classroom and not all. 
      
    
    
    
    
    
    
    
    
    
    
    
    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
