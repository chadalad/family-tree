class FamilyTree {
  constructor (name) {
    if(typeof(name) !== 'string') {
      throw 'Error';
    } else {
      this.value = name;
    }
    this.children = [];
    //this.parent = [];
  }

  insert(child) {
    child = new FamilyTree(child);
    this.children.push(child);
    //child.parent.push(this);
  }

  familySize() {
    // starting value is 1 (a family tree must be defined for this method to be called)
    // no grandchildren: children is an arr of objects. 
    return this.children.length + 1;
  }

  findMember(member) {
    // iterative
    for(let i = 0; i < this.children.length; i++) {
      if(this.children[i].value === member) {
        return this.children[i];
      }
      /*
      if(this.children[i].familySize > 1) {

      }
      */
      //this.children[i]
    }
    return undefined;

    //recursive
    /*
    if(this.value === member) { return this; }
    else {
      for(let i = 0; i < this.children.length; i++) {
        console.log(this.value, i , this.children[i].value, member);
        //console.log(this.children[i].value);
        console.log(this.children[i].findMember(member));
        //this.children[i].findMember(member);
        //findMember.call(this.children[i],member);
        //findMember.apply(this.children[i],member);
        
      }
    }
    return undefined;
    */
  }

  log() {
    // iterative
    let str = `-- ${this.value}`;
    
    for(let i = 0; i < this.children.length; i++) {
      str += `\n---- ${this.children[i].value}`;
      //console.log(str, this.children[i].value);
      if(this.children[i].children.length > 0) {
        for(let j=0; j < this.children[i].children.length; j++) {
          str += `\n------ ${this.children[i].children[j].value}`;
          //console.log(str, );
        }
        //this.children[i].log();
      }
      //str += `-- ${this.children[i].value}`;
    }
    console.log(str);
    return str;
  }
}

module.exports = FamilyTree;
