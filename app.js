

const itemCtrl = (function() {

    const data = {
        items: [
            {id: 0, name: "Steak dinner", calories: 1200},
            {id: 1, name: "Cookie", calories: 400},
            {id: 2, name: "Eggs", calories: 300}
        ], total: 0
    }

    return {
        getitems: function() {
            return data.items;
        },

    }
} ) ();

const UICtrl = (function() {
    const UISelectors = {
        itemlist: '#item-list',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        addBtn: '.add-btn',
        totalCalories: '.total-calories'
    }
    return {
        populateItemList: function (items) {
            let html = "";
            items.forEach(function (item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong> ${item.name}: </strong> <em> ${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"> </i>
                </a>
                </li>`;
            });
            document.querySelector(UISelectors.itemlist).innerHTML = html;
        },



    }
}) ();


const App = (function(itemCtrl, UICtrl, StorageCtrl) {
    const loadEventListeners = function() {

    }


    return {
        init : function() {
            console.log("initializing app");
            const items = itemCtrl.getitems();
            console.log(items);
            UICtrl.populateItemList(items);
            loadEventListeners();


        }
    }
}) (itemCtrl, UICtrl);



App.init();
