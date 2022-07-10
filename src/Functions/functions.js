const TableToNb=(tab,nb)=>{
    let i=0;
    let mini_tab =[];
    let mega_tab=[];
    tab.forEach(element => {
        if(i<nb){
            mini_tab.push(element);
            i++;
        }
        else{
            mega_tab.push([...mini_tab]);
            mini_tab=[element];
            i=1;
        }
    });
    if(mini_tab.length!==0){
        mega_tab.push([...mini_tab]);
        mini_tab=[];
        i=0;
    }
    return mega_tab;
}



export {TableToNb}