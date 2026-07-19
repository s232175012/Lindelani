// TOGGLE SIDEBAR
function toggleNav() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
    document.getElementById('mainContent').classList.toggle('shift');
}

// Subject lists for Grade 10-12
const subjects = {
    science: ['Mathematics', 'Physical Science', 'Life Science', 'Agricultural Science', 'English FAL', 'IsiXhosa HL', 'Life Orientation'],
    commerce: ['Mathematics', 'Accounting', 'Business Studies', 'English FAL', 'IsiXhosa HL', 'Economics', 'Life Orientation'],
    humanities: ['Mathematical Literacy','History', 'Geography', 'Life Science', 'English FAL', 'IsiXhosa HL', 'Life Orientation']
};

function toggleStream() {
    const grade = document.getElementById('grade').value;
    const streamSection = document.getElementById('streamSection');
    const streamSelect = document.getElementById('stream');

    if (grade >= 10) {
        streamSection.style.display = 'block';
        streamSelect.required = true;
    } else {
        streamSection.style.display = 'none';
        streamSelect.required = false;
        streamSelect.value = "N/A";
        document.getElementById('subjectsBox').innerHTML = '';
    }
}

function showSubjects() {
    const stream = document.getElementById('stream').value;
    const box = document.getElementById('subjectsBox');

    if (stream && subjects[stream]) {
        let html = '<h4>Compulsory Subjects:</h4><ul>';
        subjects[stream].forEach(sub => {
            html += `<li>✓ ${sub}</li>`;
        });
        html += '</ul><small>Electives can be discussed during registration</small>';
        box.innerHTML = html;
    } else {
        box.innerHTML = '';
    }
}

// Form submission
document.getElementById('applicationForm').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const grade = document.getElementById('grade').value;

    // Update email subject with grade before submit
    document.querySelector('input[name="_subject"]').value = `New Lindelani Application - Grade ${grade}`;

    document.getElementById('successMsg').textContent =
        `✅ Sending application... ${name}, please wait.`;
});