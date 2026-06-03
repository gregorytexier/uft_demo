
SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe",  "",  "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application"

WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").set DataTable("AgentName", dtGlobalSheet) @@ hightlight id_;_2622750_;_script infofile_;_ZIP::ssf54.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfEdit("password").SetSecure DataTable("Password", dtGlobalSheet) @@ hightlight id_;_2622750_;_script infofile_;_ZIP::ssf57.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("OK").Click

'WpfWindow("OpenText MyFlight Sample").WpfButton("FIND FLIGHTS").Check CheckPoint("Check button FIND FLIGHTS")
'WpfWindow("OpenText MyFlight Sample").WpfComboBox("fromCity").Check CheckPoint("Check fromCity = London")
'WpfWindow("OpenText MyFlight Sample").WpfComboBox("Class").Check CheckPoint("Check Class")
'

WpfWindow("OpenText MyFlight Sample").WpfComboBox("fromCity").Select DataTable("fromCity", dtGlobalSheet) @@ hightlight id_;_787996_;_script infofile_;_ZIP::ssf60.xml_;_
'WpfWindow("OpenText MyFlight Sample").WpfComboBox("fromCity").Check CheckPoint("Check fromCity = Paris")

WpfWindow("OpenText MyFlight Sample").WpfComboBox("toCity").Select DataTable("toCity", dtGlobalSheet) @@ hightlight id_;_787996_;_script infofile_;_ZIP::ssf63.xml_;_
'WpfWindow("OpenText MyFlight Sample").WpfComboBox("toCity").Check CheckPoint("Check toCity = Paris")


WpfWindow("OpenText MyFlight Sample").WpfImage("WpfImage").Click 4,13 @@ hightlight id_;_787996_;_script infofile_;_ZIP::ssf66.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfComboBox("Class").Select DataTable("Class", dtGlobalSheet) @@ hightlight id_;_787996_;_script infofile_;_ZIP::ssf69.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfComboBox("numOfTickets").Select DataTable("NbTicket", dtGlobalSheet)  @@ hightlight id_;_787996_;_script infofile_;_ZIP::ssf72.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_787996_;_script infofile_;_ZIP::ssf75.xml_;_


'WpfWindow("OpenText MyFlight Sample").WpfTable("flightsDataGrid").Check CheckPoint("Check List of Flights")

WpfWindow("OpenText MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,1 @@ hightlight id_;_787996_;_script infofile_;_ZIP::ssf78.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_787996_;_script infofile_;_ZIP::ssf81.xml_;_

'WpfWindow("OpenText MyFlight Sample").WpfEdit("passengerName").Check CheckPoint("Check passengerName = vide")
WpfWindow("OpenText MyFlight Sample").WpfEdit("passengerName").Set  DataTable("Passenger", dtGlobalSheet) @@ hightlight id_;_787996_;_script infofile_;_ZIP::ssf84.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_787996_;_script infofile_;_ZIP::ssf87.xml_;_


WpfWindow("OpenText MyFlight Sample").WpfObject("Message").Check CheckPoint("Check Order Message")

'WpfWindow("OpenText MyFlight Sample").WpfObject("Message").WaitProperty "text", "Order 103 completed", 30000
'WpfWindow("OpenText MyFlight Sample").WpfObject("Message").Exist "10"


 @@ hightlight id_;_2110127760_;_script infofile_;_ZIP::ssf97.xml_;_
 @@ hightlight id_;_3409182_;_script infofile_;_ZIP::ssf98.xml_;_
 @@ hightlight id_;_65730_;_script infofile_;_ZIP::ssf99.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfObject("PrixUnitaire").Output CheckPoint("Prix") @@ hightlight id_;_2039516816_;_script infofile_;_ZIP::ssf95.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfObject("PrixTotal").Output CheckPoint("PrixTotal") @@ hightlight id_;_2039516008_;_script infofile_;_ZIP::ssf96.xml_;_

WpfWindow("OpenText MyFlight Sample").WpfObject("Message").Output CheckPoint("OutText")
WpfWindow("OpenText MyFlight Sample").Output CheckPoint("OutTextArea")
'WpfWindow("OpenText MyFlight Sample").Output CheckPoint("OutTextArea2") @@ hightlight id_;_3409182_;_script infofile_;_ZIP::ssf100.xml_;_


WpfWindow("OpenText MyFlight Sample").WpfObject("PrixTotal").Check CheckPoint("Compare Prix") @@ hightlight id_;_2110115640_;_script infofile_;_ZIP::ssf101.xml_;_

If WpfWindow("OpenText MyFlight Sample").WpfObject("Message").Exist(20) Then
       WpfWindow("OpenText MyFlight Sample").WpfObject("Message").Output CheckPoint("Message")
	Reporter.ReportEvent micPass, "Controle du message de confirmation", "La commande a été créée avec succès !"
	WpfWindow("OpenText MyFlight Sample").WpfButton("NEW SEARCH").Click	 @@ hightlight id_;_787996_;_script infofile_;_ZIP::ssf94.xml_;_
Else
	Reporter.ReportEvent micFail, "Controle du message de confirmation", "Pas de message , pas de commande créée"
End If

WpfWindow("OpenText MyFlight Sample").Close
