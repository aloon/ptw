module.exports = {
  tags: function (val) {
    return val.split(',').map(function(tag){
      return tag.trim();
    });
  }
};

