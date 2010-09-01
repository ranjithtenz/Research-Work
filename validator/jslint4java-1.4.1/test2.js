// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function set_headerclass(){
  var cur_page = document.getElementById('page_name').value;
  var header_div = document.getElementById('logo_navi');
  var header_lists = header_div.getElementsByTagName("li");
  var num = header_lists.length;
  for (var i = 0; i < num; i++) { 
  var exp1 = new RegExp(cur_page);
  
    if (exp1.match(header_lists[i].innerHTML))
      {
      if (cur_page == 'services' || cur_page == 'careers' || cur_page == 'portfolio' || cur_page == 'home')
      header_lists[i].innerHTML = "<a href='/"+cur_page+"' class='hover'><span class='left'><span>"+cur_page.capitalize()+"</span></span></a>";
      else if (cur_page == 'about_us')
      header_lists[i].innerHTML = "<a href='/about_us' class='hover'><span class='left'><span>About&nbsp;Us</span></span></a>";
      else if (cur_page == 'contact')
      header_lists[i].innerHTML = "<a href='/contact' class='hover'><span class='left'><span>Contact&nbsp;Us</span></span></a>";
      else if (cur_page == 'startup_corner')
      header_lists[i].innerHTML = "<a href='/startup_corner' class='hover'><span class='left'><span>Startups&nbsp;corner</span></span></a>";
      }
      }
      if (cur_page == "dedicated_hiring" || cur_page == 'fixed_cost' || cur_page == 'quick_hatch' )
      header_lists[2].innerHTML = "<a href='/services' class='hover'><span class='left'><span>Services</span></span></a>";
      
   }