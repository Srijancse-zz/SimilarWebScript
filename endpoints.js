function desktopVisits() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Desktop Visits");
    var domains = ['lieferando.de', 'pizza.de', 'foodora.de', 'deliveroo.de', 'kfc.de', 'burgerking.de', 'dominos.de', 'lieferheld.de']
    var apiKey = 'ca37765437b547849f4ee373d5ab3f6f'
    var startDate = []
    var endDate = []
    var country = 'de'
    var granularity = 'daily'
    for (var k = 0; k < domains.length; k++) 
    {
      var apiUrl = "https://api.similarweb.com/v1/website/" + domains[k] + "/traffic-and-engagement/visits?api_key=" + apiKey + "&main_domain_only=false&granularity=" + granularity + "&country=" + country + "&format=json"
      var jsonData = UrlFetchApp.fetch(apiUrl).getContentText();
      var data = JSON.parse(jsonData);
      var result = [];
      result.push(data.meta.request.country,data.meta.request.domain,data.meta.device)
      sheet.appendRow(result)
      result.length = 0;
      for (var i in data.visits) {
        result.push(data.visits[i].date)
      }
      sheet.appendRow(result)
      result.length = 0;
      for (var j in data.visits) {
        result.push(data.visits[j].visits)
      }
      sheet.appendRow(result);
      result.length = 0;
    }
  }   
  
  function mobilewebVisits() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("MobileWeb Visits");
    var domains = ['lieferando.de', 'pizza.de', 'foodora.de', 'deliveroo.de', 'kfc.de', 'burgerking.de', 'dominos.de', 'lieferheld.de']
    var apiKey = 'ca37765437b547849f4ee373d5ab3f6f'
    var startDate = []
    var endDate = []
    var country = 'de'
    var granularity = 'daily'
    for (var k = 0; k < domains.length; k++) 
    {
      var apiUrl = "https://api.similarweb.com/v2/website/" + domains[k] + "/mobile-web/visits?api_key=" + apiKey + "&main_domain_only=false&granularity=" + granularity + "&country=" + country + "&format=json"
      var jsonData = UrlFetchApp.fetch(apiUrl).getContentText();
      var data = JSON.parse(jsonData);
      var result = [];
      result.push(data.meta.request.country,data.meta.request.domain,"MobileWeb")
      sheet.appendRow(result)
      result.length = 0;
      for (var i in data.visits) {
        result.push(data.visits[i].date)
      }
      sheet.appendRow(result)
      result.length = 0;
      for (var j in data.visits) {
        result.push(data.visits[j].visits)
      }
      sheet.appendRow(result);
      result.length = 0;
    }
  }   
  
  function desktopMAU() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Desktop MAU");
    var domains = ['lieferando.de', 'pizza.de', 'foodora.de', 'deliveroo.de', 'kfc.de', 'burgerking.de', 'dominos.de', 'lieferheld.de']
    var apiKey = 'ca37765437b547849f4ee373d5ab3f6f'
    var startDate = '2018-01'
    var endDate = '2019-01'
    var country = 'de'
    var granularity = 'monthly'
    for (var k = 0; k < domains.length; k++) 
    {
      var apiUrl = "https://api.similarweb.com/v1/website/" + domains[k] + "/unique-visitors/desktop_mau?api_key=" + apiKey + "&start_date=" + startDate + "&end_date=" + endDate + "&main_domain_only=false&granularity=" + granularity + "&country=" + country + "&format=json"
      var jsonData = UrlFetchApp.fetch(apiUrl).getContentText();
      var data = JSON.parse(jsonData);
      var result = [];
      result.push(data.meta.request.country,data.meta.request.domain, "Desktop MAU")
      sheet.appendRow(result)
      result.length = 0;
      for (var i in data.unique_visitors) {
        result.push(data.unique_visitors[i].date)
      }
      sheet.appendRow(result)
      result.length = 0;
      for (var j in data.unique_visitors) {
        result.push(data.unique_visitors[j].unique_visitors)
      }
      sheet.appendRow(result);
      result.length = 0;
    }
  }   
  
  function mobilewebMAU() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("MobileWeb MAU");
    var domains = ['lieferando.de', 'pizza.de', 'foodora.de', 'deliveroo.de', 'kfc.de', 'burgerking.de', 'dominos.de', 'lieferheld.de']
    var apiKey = 'ca37765437b547849f4ee373d5ab3f6f'
    var startDate = '2018-01'
    var endDate = '2019-01'
    var country = 'de'
    var granularity = 'monthly'
    for (var k = 0; k < domains.length; k++) 
    {
      var apiUrl = "https://api.similarweb.com/v1/website/" + domains[k] + "/unique-visitors/mobileweb_mau?api_key=" + apiKey + "&start_date=" + startDate + "&end_date=" + endDate + "&main_domain_only=false&granularity=" + granularity + "&country=" + country + "&format=json"
      var jsonData = UrlFetchApp.fetch(apiUrl).getContentText();
      var data = JSON.parse(jsonData);
      var result = [];
      result.push(data.meta.request.country,data.meta.request.domain, "MobileWeb MAU")
      sheet.appendRow(result)
      result.length = 0;
      for (var i in data.unique_visitors) {
        result.push(data.unique_visitors[i].date)
      }
      sheet.appendRow(result)
      result.length = 0;
      for (var j in data.unique_visitors) {
        result.push(data.unique_visitors[j].unique_visitors)
      }
      sheet.appendRow(result);
      result.length = 0;
    }
  }   
  
  function desktopBR() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Desktop Bounce Rate");
    var domains = ['lieferando.de', 'pizza.de', 'foodora.de', 'deliveroo.de', 'kfc.de', 'burgerking.de', 'dominos.de', 'lieferheld.de']
    var apiKey = 'ca37765437b547849f4ee373d5ab3f6f'
    var startDate = ''
    var endDate = ''
    var country = 'de'
    var granularity = 'daily'
    for (var k = 0; k < domains.length; k++) 
    {
      var apiUrl = "https://api.similarweb.com/v1/website/" + domains[k] + "/traffic-and-engagement/bounce-rate?api_key=" + apiKey + "&main_domain_only=false&granularity=" + granularity + "&country=" + country + "&format=json"
      var jsonData = UrlFetchApp.fetch(apiUrl).getContentText();
      var data = JSON.parse(jsonData);
      var result = [];
      result.push(data.meta.request.country,data.meta.request.domain, "Desktop Bounce Rate")
      sheet.appendRow(result)
      result.length = 0;
      for (var i in data.bounce_rate) {
        result.push(data.bounce_rate[i].date)
      }
      sheet.appendRow(result)
      result.length = 0;
      for (var j in data.bounce_rate) {
        result.push(data.bounce_rate[j].bounce_rate)
      }
      sheet.appendRow(result);
      result.length = 0;
    }
  }  
  
  function mobileBR() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Mobile Bounce Rate");
    var domains = ['lieferando.de', 'pizza.de', 'foodora.de', 'deliveroo.de', 'kfc.de', 'burgerking.de', 'dominos.de', 'lieferheld.de']
    var apiKey = 'ca37765437b547849f4ee373d5ab3f6f'
    var startDate = ''
    var endDate = ''
    var country = 'de'
    var granularity = 'daily'
    for (var k = 0; k < domains.length; k++) 
    {
      var apiUrl = "https://api.similarweb.com/v2/website/" + domains[k] + "/mobile-web/bounce-rate?api_key=" + apiKey + "&main_domain_only=false&granularity=" + granularity + "&country=" + country + "&format=json"
      var jsonData = UrlFetchApp.fetch(apiUrl).getContentText();
      var data = JSON.parse(jsonData);
      var result = [];
      result.push(data.meta.request.country,data.meta.request.domain, "Mobile Bounce Rate")
      sheet.appendRow(result)
      result.length = 0;
      for (var i in data.bounce_rate) {
        result.push(data.bounce_rate[i].date)
      }
      sheet.appendRow(result)
      result.length = 0;
      for (var j in data.bounce_rate) {
        result.push(data.bounce_rate[j].bounce_rate)
      }
      sheet.appendRow(result);
      result.length = 0;
    }
  }  