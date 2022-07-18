function calculate(a){

let inc;
if(a<=500000)
{
    inc=a-a*.5
}
else if(a<=1000000)
{
    inc=a-a*.3
}
else if(a>1000000)
{
    inc=a-a*.1
}

if(inc<250000)  return `no tax`
else if(inc>=250000 && inc<500000) return `${inc*0.1}`
else if(inc>=500000 && inc<1000000) return `${inc*0.2}`
else if(inc>=1000000) return `${inc*0.3}`
}

export default calculate
