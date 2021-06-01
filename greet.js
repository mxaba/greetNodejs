module.exports = function (name){
    if (typeof(name) == 'string'){
      return "Hello, " + name;
    }
    else {
      console.log('This function only accepts a String');
      return false
    }
}

// export default greet


  // var msg = greet('Xola')
  // console.log(msg)
