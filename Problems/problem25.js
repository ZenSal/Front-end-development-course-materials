

var triangles =[
    [2,15,4],
    [1,2,15],
    [2,10,7]
]  

function LowandUptriangles(triangles){

    uppertriangle=0;
    lowertriangle=0;
    
    for(let i=0; i<triangles.length; i++){
        for(let j=0; j<=i; j++){
            uppertriangle+=triangles[i][j];
            
    }

    }console.log(uppertriangle)
    for(let i=0; i<triangles.length; i++){
        for(let j=i; j<triangles[i].length; j++){
            lowertriangle+=triangles[i][j];

        }
    }console.log(lowertriangle);
}
LowandUptriangles(triangles);
