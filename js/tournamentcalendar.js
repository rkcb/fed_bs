$(document).ready(function() {

    /////////////////////////////////////////////////////
    // create datepicker for tournament begin

    var beginDatepicker = $("#begin").flatpickr({
        weekNumbers: true,
        clickOpens: true,
        time_24hr: true,
        dateFormat: "Y-m-dTH:i",
        altInput: true,
        altFormat: "d.m.Y, H:i",
        enableTime: true,
        // locale: "fi",
    });

    $('#closebutton').click(function () {
        $('#tournamenteditor').css('display', 'none');
    });

    // set ESC down event close the tournament editor iff it is open
    // set Enter to choose the current date value
    window.addEventListener('keydown', function (event) {

        if (event.key === 'Enter'){
            let beginDatepickerVisible = $('div.flatpickr-calendar').css('display') === 'block';

            if (beginDatepickerVisible){
                beginDatepicker.close();
            }

        }
        if (event.key === 'Escape') {
            let visible = $('#tournamenteditor').css('display') === 'block';

            if (visible) {
                $('#tournamenteditor').css('display', 'none');
            }
        }
    }, true);
    /////////////////////////////////////////////////////



    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'listDay,listWeek,month'
        },

        // create a new event
        dayClick: function(date, jsEvent, view) {
            $('#updatebutton').css('display', 'none');
            $('#deletebutton').css('display', 'none');
            $('#createbutton').css('display', 'inline-block');
            $('#tournamenteditor').css('display', 'block');
            // initialize the datetime value of the datepicker
            beginDatepicker.setDate(date.format() + 'T11:00');
        },

        // modify, copy or delete an event
        eventClick: function(calEvent, jsEvent, view) {
            $('#updatebutton').css('display', 'inline-block');
            $('#deletebutton').css('display', 'inline-block');
            // you can copy an event with this
            $('#createbutton').css('display', 'inline-block');
            $('#tournamenteditor').css('display', 'block');
        },


            // customize the button names,
        // otherwise they'd all just say "list"
        views: {
            listDay: { buttonText: 'list day' },
            listWeek: { buttonText: 'list week' }
        },

        defaultView: 'month',
        defaultDate: '2018-09-06',
        navLinks: true, // can click day/week names to navigate views
        select: function(start, end) {
            console.log("click");
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
        },
        editable: false,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2018-09-07'
            },
            {
                title: 'Long Event',
                start: '2018-03-07',
                end: '2018-03-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-03-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-03-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2018-03-11',
                end: '2018-03-13'
            },
            {
                title: 'Meeting',
                start: '2018-03-12T10:30:00',
                end: '2018-03-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2018-03-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2018-03-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2018-03-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2018-03-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2018-03-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-03-28'
            }
        ]
    });

});