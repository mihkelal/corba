package engine;

import java.io.*; 
import java.util.Enumeration;

import javax.servlet.*; 
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*; 


@WebServlet("/main")
public class main extends HttpServlet { 
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
		PrintWriter out = resp.getWriter();
		resp.setContentType("text/html");
		String action = req.getParameter("action");
		if (action != null && action.equals("database_setMangija_raha")) {
			System.out.println("RAHA="+req.getAttribute("raha"));
			teebmidagi(req);
			database.setMangija_raha(Integer.parseInt(req.getParameter("raha")));
		}
		
	}
	
	public void teebmidagi(HttpServletRequest req){
		Enumeration<String> names = req.getParameterNames();
		while(names.hasMoreElements()){
			String name = names.nextElement();
			System.out.println(name + "=" + req.getParameter(name));
		}
	}
	
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
			
			out.println(boost(action));
			
		}		
		if (action != null && action.equals("sega")) {
			for (int i = 0; i < 52; i++){
				out.println(shuffle.saaElement(i));				
			}			
		}		
		if (action != null && action.equals("bet")) {
			out.println(Betting.getPot());
		}
		
		if (action != null && action.equals("rename")) {
			out.println(RenameCards.list3);
		}
		
		if (action != null && action.equals("database_getPot")) {
			out.println(database.getPot());
		}
		if (action != null && action.equals("database_getPanus")) {
			out.println(database.getPanus());
		}
		if (action != null && action.equals("database_getSuurim_panus")) {
			out.println(database.getSuurim_panus());
		}
		if (action != null && action.equals("database_getDiilercount")) {
			out.println(database.getDiilercount());
		}
		if (action != null && action.equals("database_getBot_raha")) {
			out.println(database.getBot_raha());
		}
		if (action != null && action.equals("database_getBot_out")) {
			out.println(database.getBot_out());
		}
		if (action != null && action.equals("database_getBot_bet")) {
			out.println(database.getBot_bet());
		}
		if (action != null && action.equals("database_getRing")) {
			out.println(database.getRing());
		}
		if (action != null && action.equals("database_getRound")) {
			out.println(database.getRound());
		}
		if (action != null && action.equals("database_getSB")) {
			out.println(database.getSB());
		}
		if (action != null && action.equals("database_getBB")) {
			out.println(database.getBB());
		}	
		if (action != null && action.equals("database_getMangija_raha")) {
			out.println(database.getMangija_raha());
		}
		
		


	} 	

	
	public int boost(String action){
		System.out.println(action);
		System.out.println(action);
		System.out.println(action);
		System.out.println("midagiiiii");
		
		return 0;
	}
}