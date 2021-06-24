import Authenticated from '@/Layouts/Authenticated';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

const Calendar = (props) => {
    return(
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Calendar</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="min-h-screen bg-gray-100">
                            <ReactEmbeddedGoogleCalendar publicUrl ="https://calendar.google.com/calendar/u/0/r"/>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
                            

    )
}

export default Calendar;