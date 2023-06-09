function mySet(){
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true of false
    this.has = function(element){
        return(collection.indexOf(element) !== -1);
    }
    // this  method will return all the values in the set
    this.values =  function(){
        return collection;
    }
    // this method will add an element to the set
    this.odd = function(element){
        if (!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // This method will remove an element from a set
    this.remove = function(element){
        if (this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    }
    // This method will return the size of the collection
    this.size = function(){
        return collection.length;
    }

    //This method will return the union of two sets;
    this.union = function(otherSet){
        var unionSet  = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };

    //this method will return the intersection of two sets as a new Set
    this.intersection  =  function(otherSet){
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if (otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    // This method will return the difference of two sets as a new set
    this.difference = function(otherSet){
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if (!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    // this method will test if the is a substring of a different set
    this.subset = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        });
    };
}