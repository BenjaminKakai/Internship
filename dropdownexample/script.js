// Add click event to dropbtn to toggle dropdown content
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.querySelector('.dropbtn').addEventListener('click', (e) => {
        let dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        e.stopPropagation(); // Prevent click event from reaching the document
    });

    // Hide dropdown content when cursor leaves the dropdown area
    dropdown.addEventListener('mouseleave', (e) => {
        let dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.style.display = 'none';
    });
});

// Add click event to submenu-link to toggle submenu
document.querySelectorAll('.submenu-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Stop the event from bubbling up to the parent
        let submenu = e.target.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});

// Hide dropdown content when clicking outside of the dropdown area
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-content').forEach(dropdownContent => {
        dropdownContent.style.display = 'none';
    });
});

