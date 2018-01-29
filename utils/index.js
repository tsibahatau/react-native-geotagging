import _ from 'lodash';

export const rename = function(obj, key, newKey) {
  
    if(_.contains(_.keys(obj), key)) {
      obj[newKey] = _.clone(obj[key], true);
  
      delete obj[key];
    }
    
    return obj;
  };