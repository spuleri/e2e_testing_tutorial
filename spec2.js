describe('our todo list', function() {

    var inputBox = element(by.model('newItem'));
    var addButton = element(by.id('add'));
    var deleteButtons = element.all(by.id('delete'));
    var todos = element.all(by.repeater('do in todos'));



  it('should be able to access the app', function() {
    browser.get('http://localhost:3000');
    expect(browser.getTitle()).toEqual('ToDo')
    browser.sleep(1500)
  });

  it('should be able to add something to our to do list', function(){

    inputBox.sendKeys('an item to do');
    //browser.sleep(500)
    addButton.click();
    //browser.sleep(500)
  });

  it('should be able to add 10 items to the list', function(){

    for(var i = 0; i < 11; i++){
        inputBox.sendKeys('item to do number: ' + i);
        addButton.click();
        //browser.sleep(500);
    }
    expect(todos.count()).toEqual(12);
    browser.sleep(1000)

  })

  it('should be able to delete one item', function(){
    

    deleteButtons.get(0).click();
    browser.sleep(1000)

    expect(todos.count()).toEqual(11);

  });

  it('should be able to edit an item', function (){
    var editButtons = element.all(by.id('edit'));
    var editTextBox = element(by.model('editText'));
    var saveButton = element(by.id('save'));

    editButtons.get(0).click();
    browser.sleep(500);
    editTextBox.sendKeys('this is an edit!!!!');
    browser.sleep(500);
    saveButton.click();
    browser.sleep(1000)
    expect(todos.get(0).getText()).toEqual('this is an edit!!!!');
  });

  it('should be able to delete all the items', function(){
    for(var i =0; i < 11; i++ ) {
        deleteButtons.get(0).click()
    }
    expect(todos.count()).toEqual(0);
  });


});