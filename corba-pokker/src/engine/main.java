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
		
		if (action != null && action.equals("database_getPot")) {
			out.println(database.getPot());
		}
		if (action != null && action.equals("database_getPanus")) {
			out.println(database.getPot());
		}
		if (action != null && action.equals("database_getSuurim_panus")) {
			out.println(database.getPot());
		}
		if (action != null && action.equals("database_getDiilercount")) {
			out.println(database.getPot());
		}
		if (action != null && action.equals("database_getBot_raha")) {
			out.println(database.getPot());
		}
		if (action != null && action.equals("database_getBot_out")) {
			out.println(database.getPot());
		}
		if (action != null && action.equals("database_getBot_bet")) {
			out.println(database.getPot());
		}
		if (action != null && action.equals("database_getRing")) {
			out.println(database.getPot());
		}
		if (action != null && action.equals("database_getRound")) {
			out.println(database.getPot());
		}
		if (action != null && action.equals("database_getSB")) {
			out.println(database.getPot());
		}
		if (action != null && action.equals("database_getBB")) {
			out.println(database.getPot());
		}		
	} 	
}