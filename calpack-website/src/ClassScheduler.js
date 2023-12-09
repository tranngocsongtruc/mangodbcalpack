import React from 'react';
import AdvisorAppointments from './AdvisorAppointments';
import ClassSearch from './ClassSearch';

function ClassScheduler() {
  return (
    <div>
      <h2>Class Scheduler</h2>
      <AdvisorAppointments />
      <ClassSearch />
    </div>
  );
}

export default ClassScheduler;
