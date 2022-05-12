import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Yasoja Routes

import Questionnaire from "../workout/qestion/Questionnaire";
import Show from "../workout/qestion/Show";
import Workout from "../workout/addWorkout";
import WorkoutEmployeeShow from "../workout/showWorkoutEmployee";
import UpdateWorkout from "../workout/updateWorkout";
import WorkoutAdminShow from "../workout/showWorkoutAdmin";
import showWorkoutOneEmployee from "../workout/showWorkoutOneEmployee";
import showWorkoutChosen from "../workout/ShowChosen";
import showWorkoutOneUser from "../workout/showWorkoutOneUser";
import workoutPayment from "../workout/workoutPayment";
import showAllWorkoutUser from "../workout/showAllWorkoutUser";

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route>
            <Route path="/question" component={Questionnaire} exact />
            <Route path="/show" component={Show} />
            <Route path="/workout" component={Workout} />
            <Route
              path="/workoutEmployeeShow" component={WorkoutEmployeeShow}
            />
            <Route path="/workoutUpdate/:id" component={UpdateWorkout} />
            <Route path="/workoutAdminShow" component={WorkoutAdminShow} />
            <Route
              path="/workoutEmployeeShowOne/:id" component={showWorkoutOneEmployee}
            />
            <Route path="/workoutChosen/:id" component={showWorkoutChosen} />
            <Route path="/workoutUserShow/:id" component={showWorkoutOneUser} />
            <Route path="/workoutPayment/:price" component={workoutPayment} />
            <Route path="/workoutUserAllShow" component={showAllWorkoutUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
