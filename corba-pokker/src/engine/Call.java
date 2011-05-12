package engine;

import java.util.Random;

public class Call extends main {
	static void call() {
		alert("panus ennem " + get_database("database_getPanus"));

		alert(get_database("database_getSuurim_panus"));
		alert(get_database("database_getPanus"));
		alert(get_database("database_getMangija_raha"));

		if (get_database("database_getSuurim_panus")
				- get_database("database_getPanus") < get_database("database_getMangija_raha")) {
			set_database("database_setPanus", "value"
					+ get_database("database_getSuurim_panus")
					+ get_database("database_getPanus"));
			alert("suurim " + get_database("database_getSuurim_panus"));
			alert("panus " + get_database("database_getPanus"));
			to_pot();
		} else {
			var puudu = document.getElementById("example1");
			puudu.appendChild(document.createTextNode("pole piisavalt raha/n"));
			puudu.appendChild(document.createTextNode("command line# "));
		}

	}
}