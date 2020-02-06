$('form').submit((e) => {
    e.preventDefault();
    let z = $('input').val().trim();
    let parsedItems = $.parseHTML(`
         <li>
          <span class="shopping-item">${z}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
             check
            </button>
            <button class="shopping-item-delete">
                 delete
            </button>
          </div>
      </li>
      `);
    if (z != '') {
        $('.shopping-list').append(parsedItems);
    } else {
        alert("Enter item");
    }

    $('input').val('');
});

$(".shopping-list").on('click', '.shopping-item-delete', function () {
    let parent = $(this).closest('li')

    parent.fadeOut(function () {
        parent.remove();

    })



});

$(".shopping-list").on('click', '.shopping-item-toggle', function () {
    let parent = $(this).closest('li');
    parent.toggleClass('shopping-item__checked');
    if ($(this).text().trim() == 'check') {
        $(this).text("Uncheck");
    } else if ($(this).text().trim() == 'Uncheck') {
        $(this).text("check");
    }


});