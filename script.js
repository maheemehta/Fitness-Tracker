document.getElementById('workoutForm').addEventListener('submit', addWorkout);

let workouts = [];

function addWorkout(event) {
    event.preventDefault();

    const exercise = document.getElementById('exercise').value;
    const duration = parseInt(document.getElementById('duration').value);
    const calories = parseInt(document.getElementById('calories').value);

    const workout = {
        exercise: exercise,
        duration: duration,
        calories: calories
    };

    workouts.push(workout);
    displayWorkouts();
    clearForm();
}

function displayWorkouts() {
    const summaryDiv = document.getElementById('workoutSummary');
    summaryDiv.innerHTML = '';

    if (workouts.length === 0) {
        summaryDiv.innerHTML = '<p>No workouts logged yet.</p>';
        return;
    }

    workouts.forEach((workout, index) => {
        const workoutDiv = document.createElement('div');
        workoutDiv.className = 'workout';
        workoutDiv.innerHTML = `
            <strong>${workout.exercise}</strong><br>
            Duration: ${workout.duration} minutes<br>
            Calories Burned: ${workout.calories}
            <button onclick="removeWorkout(${index})">Remove</button>
        `;
        summaryDiv.appendChild(workoutDiv);
    });

    const totalDuration = workouts.reduce((total, workout) => total + workout.duration, 0);
    const totalCalories = workouts.reduce((total, workout) => total + workout.calories, 0);

    summaryDiv.innerHTML += `<p><strong>Total Duration:</strong> ${totalDuration} minutes</p>`;
    summaryDiv.innerHTML += `<p><strong>Total Calories Burned:</strong> ${totalCalories} kcal</p>`;
}

function removeWorkout(index) {
    workouts.splice(index, 1);
    displayWorkouts();
}

function clearForm() {
    document.getElementById('exercise').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('calories').value = '';
}
