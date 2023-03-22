const greeting:any = (name:String) => {
    if(name){
        return `Hello ${name}`
    }
    return ''
}

export { greeting };