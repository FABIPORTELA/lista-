document.getElementById('addButton').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const quantityInput = document.getElementById('quantityInput');
    const itemValue = itemInput.value.trim();
    const quantityValue = quantityInput.value.trim();

    if (itemValue && quantityValue) {
        const shoppingList = document.getElementById('shoppingList');
        const listItem = document.createElement('li');

        // Cria a caixa de seleção
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = function() {
            listItem.classList.toggle('paid', checkbox.checked); // Adiciona ou remove a classe 'paid' com base no estado da checkbox
        };

        // Adiciona o texto do item
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(`${itemValue} (Quantidade: ${quantityValue})`));

        // Botão de excluir
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('delete');
        deleteButton.onclick = function() {
            shoppingList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        shoppingList.appendChild(listItem);

        // Limpa os campos de entrada
        itemInput.value = '';
        quantityInput.value = '';
    } else {
        alert('Por favor, insira um item e uma quantidade.');
    }
});
