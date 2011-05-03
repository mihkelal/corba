package engine;

import java.io.*; 
import javax.servlet.*; 
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*; 


@WebServlet("/main")
public class main extends HttpServlet { 
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) 
	throws IOException, ServletException { 
		response.setContentType("text/html"); 
		PrintWriter out = response.getWriter(); 

		
		String action = request.getParameter("action"); 
		if (action != null && action.equals("getInfo")) {
			out.println("URL: " + request.getRequestURI());
		}


		if (action != null && action.equals("muuda")) {
			
			
			
		}
		if (action != null && action.equals("uuenda")) {
			
			out.println(shuffle.segamine());
			
		}
		
		if (action != null && action.equals("sega")) {
			for (int i = 0; i < 52; i++){
				out.println(shuffle.saaElement(i));
				
			}
			
		}
		
		if (action != null && action.equals("bet")) {
			out.println(Betting.getPot());
		}
		
	} 
	
}