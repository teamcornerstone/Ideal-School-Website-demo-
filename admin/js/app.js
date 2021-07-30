// reference
const sidebarToggleBtn        = document.querySelector('.sidebar__brand-menu__btn');
const sidebar                 = document.querySelector('.sidebar');
const sidebar_logo            = document.querySelector('.sidebar__brand img');
const sidebar_title           = document.querySelector('.sidebar__brand .sidebar__brand-title');
const sidebar_lists           = document.querySelector('.sidebar__lists');
const header                  = document.getElementById('header');
const menuNavsidebarToggleBtn = document.getElementById('menu-nav__sidebar-toggle');
const bar_chart               = document.getElementById('bar_chart');
const doughnut_chart          = document.getElementById('doughnut_chart');
const main                    = document.querySelector('main');





var bar_chart_ref                     = new Chart(bar_chart,{
    type: 'bar',
    data: {
        labels: ['Jan 2021','Feb 2021','Mar 2021','Apr 2021','May 2021','June 2021'],
        datasets:[{
            label:'Populations',
            data:[
                617594,
                456573,
                332456,
                987567,
                333333,
                982356
            ],
            // backgroundColor:'green',
            backgroundColor:['#5b2e8b','#ef3c40','#6dcddd','#92c83f','#f68c1e','#bb509e'],
            borderWidth:1,
            borderColor: '#777',
            hoverBorderWidth:3,
            hoverBorderColor:'rgba(0,0,0,0.2)'
        },]
    }
})
var doughnut_chart_ref                    = new Chart(doughnut_chart,{
    type: 'doughnut',
    data: {
        labels: ['Jan 2021','Feb 2021'],
        datasets:[{
            label:'Populations',
            data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
            borderWidth:1,
            borderColor: '#777',
            hoverBorderWidth:3,
            hoverBorderColor:'rgba(0,0,0,0.2)'
        },]
    },
    options:{
        responsive:true,
        
    }
})

// variables
let sidebarState = false;


// functions
const sidebarToggle = () =>{
    console.log(sidebarState)
    if(sidebarState){
        sidebar.classList.remove('open');
        header.style.marginLeft = '0px'
        main.style.marginLeft = '0px'
        sidebarState = false;
        menuNavsidebarToggleBtn.style.display = 'block'
        
        
    }else{
        sidebar.classList.add('open');
        header.style.marginLeft = '300px'
        main.style.marginLeft = '300px'
        sidebarState = true;
        menuNavsidebarToggleBtn.style.display = 'none'
        
    }
}




// event listeners
sidebarToggleBtn.addEventListener('click',sidebarToggle);
menuNavsidebarToggleBtn.addEventListener('click',sidebarToggle);