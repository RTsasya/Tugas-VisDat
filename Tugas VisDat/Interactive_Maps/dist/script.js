$(document).ready(function(){
  
  var maps = [ // store city name & url in a json
				{"name": "Ekspor", "url": "https://raw.githubusercontent.com/wiwinsrimulyani/open-data/master/eksporPerNegara.json"},
				{"name": "Impor", "url": "https://raw.githubusercontent.com/wiwinsrimulyani/open-data/master/imporpernegara.json"}
			];
  for (var i = 0; i < maps.length; i++){ // append an option per each json element

			    var name = maps[i]["name"];

			    var url = maps[i]["url"];

			    $('.js-file-selector').append("<option value=" + url + " id="+name+">" + name + "</option>");

			    }

  //define the svg height and width
  w = 1000;
  h = 480;
  
  d3.select('#maps').select("svg").remove();
  
  //doing the projection
  var projection = d3.geo.equirectangular()
  
  var path = d3.geo.path()
               .projection(projection);
  
  var svg = d3.select('body')
              .append('svg')
              .attr('width', w)
              .attr('height', h)
  
 svg.append('rect')
  .attr('width', w)
  .attr('height', h)
  .attr('fill', 'white');
  
  var g = svg.append("g");
  
  //load the topojson
  
  d3.json('https://d3js.org/world-50m.v1.json',
         function(error, data){
          if(error) console.log(error);
    
    
      g.append('path')
       .datum(topojson.feature(data, data.objects.countries))
    
    
    //here is shown the maps
    .attr('d', path)
    
    
    //create the zoom effect
    var zoom = d3.behavior.zoom()
    .on("zoom", function(){
      g.attr("transform", "translate("+ d3.event.translate.join(",") +")scale(" + d3.event.scale + ")");
       g.selectAll('path')
      .attr("d", path.projection(projection));
    });
    svg.call(zoom);
    
			  $(".js-file-selector").select2(); // add selector plugin

     $('.js-file-selector').change(function(){ // add event when the selector is changed

			    var input = $( ".js-file-selector option:selected" ).val(); // get url as input

       
       

    d3.json(input,
    function(error, data){
      if(error) console.log(error);
      

      
      var locations = data.features;
      var hue = 0; //for creating the circle
      
      //create an object for holding the dataset
      
      locations.map(function(d){
        //create the property each circle, give the value from color
        hue += 0.36
        d.color = 'hsl(' + hue +', 100%, 50%)';
        
      });
      
      //classic d3 function
      g.selectAll('circle')
      .data(locations)
      .enter()
      .append('circle')
      .attr('cx', function(d){
        if(d.geometry){
          return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[0];
        }
      })
      .attr('cy', function(d){
        if(d.geometry){
          return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[1];
        }
      })
      
      //submit the r of the data
      .attr('r', function(d){
       if(d.properties.Peran2020){
         return parseInt(d.properties.Peran2020 + 5);
       }
      })
      
      .style('fill', function(d){
        return d.color;
      })
     
      
     //add ecent listener || mouseover
      .on('mouseover', function(d){
        d3.select(this).style('fill', 'black');
        d3.select('#country').text(d.properties.Negara);
 d3.select('#X2015').text(d.properties.X2015 + ' Juta US$');
 d3.select('#X2016').text(d.properties.X2016 + ' Juta US$');
 d3.select('#X2017').text(d.properties.X2017 + ' Juta US$');
 d3.select('#X2018').text(d.properties.X2018 + ' Juta US$');
 d3.select('#X2019').text(d.properties.X2019 + ' Juta US$');
 d3.select('#X2020').text(d.properties.X2020 + ' Juta US$');
 d3.select('#peran2020').text(d.properties.Peran2020 + ' Juta US$');
 d3.select('#tooltip')
   .style('left', (d3.event.pageX + 20) + 'px')
   .style('top', (d3.event.pageY - 80) + 'px')
   .style('display', 'block')
   .style('opacity', 0.8)
      })
      
      //add event listener || mouse out
      .on('mouseout', function(d){
        d3.select(this).style('fill', d.color);
        d3.select('#tip')
        .style('display', 'none');
      });
    });
  });
});
  });