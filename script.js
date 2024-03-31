document.addEventListener("DOMContentLoaded", function() {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const workoutPlan = {
        'Monday': ['Chest', 'Triceps', 'Shoulders'],
        'Tuesday': ['Back', 'Biceps', 'Core'],
        'Wednesday': ['Legs', 'Cardio'],
        'Thursday': ['Chest', 'Back', 'Core'],
        'Friday': ['Arms', 'Shoulders', 'Core'],
        'Saturday': ['Legs'],
        'Sunday': ['Rest']
    };

    const calendarDiv = document.getElementById('calendar');

    daysOfWeek.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.textContent = day;

        dayDiv.addEventListener('click', function() {
            if (!this.classList.contains('completed')) {
                this.classList.add('completed');
            } else {
                this.classList.remove('completed');
            }
        });

        if (workoutPlan[day]) {
            const workouts = document.createElement('ul');
            workoutPlan[day].forEach(workout => {
                const workoutItem = document.createElement('li');
                workoutItem.textContent = workout;
                workouts.appendChild(workoutItem);
            });
            dayDiv.appendChild(workouts);
        }

        calendarDiv.appendChild(dayDiv);
    });
});
