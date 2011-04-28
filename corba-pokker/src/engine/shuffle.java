package engine;

import java.io.*; 
import javax.servlet.*; 
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*; 


@WebServlet("/shuffle")
public class shuffle extends HttpServlet { 
	int counter = 0;
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) 
	throws IOException, ServletException { 
		response.setContentType("text/html"); 
		PrintWriter out = response.getWriter(); 

		
		String action = request.getParameter("action"); 
		if (action != null && action.equals("getInfo")) {
			out.println("URL: " + request.getRequestURI());
		}
		if (action != null && action.equals("yo")) {
			out.println("Hello world!");
			out.println(counter);
		}
		if (action != null && action.equals("muuda")) {
			out.println(counter);
			
			
		}
		if (action != null && action.equals("uuenda")) {
			
			out.println(call());
			
		}
		
	} 
	
	public int call() {
		return 5;
		
	}
}