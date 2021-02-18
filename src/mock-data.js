const mockData = [
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
         "email": "fullstackwebdev@careerfoundry.com",
         "self": true
        },
        "organizer": {
         "email": "fullstackwebdev@careerfoundry.com",
         "self": true
        },
        "start": {
         "dateTime": "2020-05-19T16:00:00+02:00",
         "timeZone": "Europe/Berlin"
        },
        "end": {
         "dateTime": "2020-05-19T17:00:00+02:00",
         "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
         "dateTime": "2020-05-19T16:00:00+02:00",
         "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
         "useDefault": true
        },
        "eventType": "default"
       },
       {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
         "email": "fullstackwebdev@careerfoundry.com",
         "self": true
        },
        "organizer": {
         "email": "fullstackwebdev@careerfoundry.com",
         "self": true
        },
        "start": {
         "dateTime": "2020-05-20T14:00:00+02:00",
         "timeZone": "Europe/Berlin"
        },
        "end": {
         "dateTime": "2020-05-20T15:00:00+02:00",
         "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
         "dateTime": "2020-05-20T14:00:00+02:00",
         "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
         "useDefault": true
        },
        "eventType": "default"
       }
]

export { mockData };












// 20210217131859
// https://m7iq9z42d6.execute-api.us-west-1.amazonaws.com/dev/api/get-events/ya29.A0AfH6SMBlbkrkZEe0dG82Hd-7uXn9BJzWkrH7Sbln5PgSPNFU59HRQmpB8LppMztb1Y6PZ_gfVAEJLPDkeANOvkEAmub3VfpD3VUZM5xRkj4DRG7I3nHp7h3yiN010f5aZWsjip3shQoa9JuNpwdEBTHY7R0ePw



// const mockData = [

// {
//     "config": {
//       "url": "https://www.googleapis.com/calendar/v3/calendars/fullstackwebdev%40careerfoundry.com/events?timeMin=2021-02-17T21%3A18%3A39.645Z&singleEvents=true&orderBy=startTime",
//       "method": "GET",
//       "userAgentDirectives": [
//         {
//           "product": "google-api-nodejs-client",
//           "version": "4.4.3",
//           "comment": "gzip"
//         }
//       ],
//       "headers": {
//         "x-goog-api-client": "gdcl/4.4.3 gl-node/12.20.1 auth/6.1.6",
//         "Accept-Encoding": "gzip",
//         "User-Agent": "google-api-nodejs-client/4.4.3 (gzip)",
//         "Authorization": "Bearer ya29.A0AfH6SMBlbkrkZEe0dG82Hd-7uXn9BJzWkrH7Sbln5PgSPNFU59HRQmpB8LppMztb1Y6PZ_gfVAEJLPDkeANOvkEAmub3VfpD3VUZM5xRkj4DRG7I3nHp7h3yiN010f5aZWsjip3shQoa9JuNpwdEBTHY7R0ePw",
//         "Accept": "application/json"
//       },
//       "params": {
//         "timeMin": "2021-02-17T21:18:39.645Z",
//         "singleEvents": true,
//         "orderBy": "startTime"
//       },
//       "retry": true,
//       "responseType": "json"
//     },
//     "data": {
//       "kind": "calendar#events",
//       "etag": "\"p3308h454qfgum0g\"",
//       "summary": "fullstackwebdev@careerfoundry.com",
//       "updated": "2020-09-11T17:42:14.056Z",
//       "timeZone": "Europe/Berlin",
//       "accessRole": "reader",
//       "defaultReminders": [
        
//       ],
//       "nextPageToken": "EjYKKzIwYzUxamUzcTk5bW5vbHIxcnAwNmR0OWpkXzIwMjEwNDEwVDEyMDAwMFoYgLCKkuvz7wIiBwgFELDOhhE=",
//       "items": [
//         {
//           "kind": "calendar#event",
//           "etag": "\"3187221858184000\"",
//           "id": "3gi3kabkm3bua5lq3jhscc8s4c_20210217T210000Z",
//           "status": "confirmed",
//           "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMTAyMTdUMjEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
//           "created": "2020-07-01T13:23:24.000Z",
//           "updated": "2020-07-01T13:42:09.092Z",
//           "summary": "Intro to AngularJS-Remote",
//           "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
//           "location": "New York, NY, USA",
//           "creator": {
//             "email": "fullstackwebdev@careerfoundry.com",
//             "self": true
//           },
//           "organizer": {
//             "email": "fullstackwebdev@careerfoundry.com",
//             "self": true
//           },
//           "start": {
//             "dateTime": "2021-02-17T22:00:00+01:00",
//             "timeZone": "Europe/Berlin"
//           },
//           "end": {
//             "dateTime": "2021-02-17T23:00:00+01:00",
//             "timeZone": "Europe/Berlin"
//           },
//           "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
//           "originalStartTime": {
//             "dateTime": "2021-02-17T22:00:00+01:00",
//             "timeZone": "Europe/Berlin"
//           },
//           "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
//           "sequence": 2,
//           "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
//           "conferenceData": {
//             "entryPoints": [
//               {
//                 "entryPointType": "video",
//                 "uri": "https://meet.google.com/xcb-hfjb-psv",
//                 "label": "meet.google.com/xcb-hfjb-psv"
//               },
//               {
//                 "entryPointType": "more",
//                 "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
//                 "pin": "4442155852117"
//               },
//               {
//                 "regionCode": "DE",
//                 "entryPointType": "phone",
//                 "uri": "tel:+49-40-8081617300",
//                 "label": "+49 40 8081617300",
//                 "pin": "657955248"
//               }
//             ],
//             "conferenceSolution": {
//               "key": {
//                 "type": "hangoutsMeet"
//               },
//               "name": "Google Meet",
//               "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
//             },
//             "conferenceId": "xcb-hfjb-psv",
//             "signature": "AL9oL6Vr6kh9gtl5ysMlFEENOatu"
//           },
//           "reminders": {
//             "useDefault": true
//           },
//           "eventType": "default"
//         },
//         {
//           "kind": "calendar#event",
//           "etag": "\"3187237556010000\"",
//           "id": "111vmlbl7p8gmc0fbf5u107p8u_20210218T080000Z",
//           "status": "confirmed",
//           "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMTAyMThUMDgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
//           "created": "2020-07-01T15:47:59.000Z",
//           "updated": "2020-07-01T15:52:58.005Z",
//           "summary": "React Native Tokyo",
//           "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
//           "location": "Tokyo, Japan",
//           "creator": {
//             "email": "fullstackwebdev@careerfoundry.com",
//             "self": true
//           },
//           "organizer": {
//             "email": "fullstackwebdev@careerfoundry.com",
//             "self": true
//           },
//           "start": {
//             "dateTime": "2021-02-18T09:00:00+01:00",
//             "timeZone": "Europe/Berlin"
//           },
//           "end": {
//             "dateTime": "2021-02-18T10:00:00+01:00",
//             "timeZone": "Europe/Berlin"
//           },
//           "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
//           "originalStartTime": {
//             "dateTime": "2021-02-18T09:00:00+01:00",
//             "timeZone": "Europe/Berlin"
//           },
//           "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
//           "sequence": 1,
//           "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
//           "conferenceData": {
//             "entryPoints": [
//               {
//                 "entryPointType": "video",
//                 "uri": "https://meet.google.com/ceo-behe-ssp",
//                 "label": "meet.google.com/ceo-behe-ssp"
//               },
//               {
//                 "entryPointType": "more",
//                 "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
//                 "pin": "2641490783465"
//               },
//               {
//                 "regionCode": "DE",
//                 "entryPointType": "phone",
//                 "uri": "tel:+49-40-8081617770",
//                 "label": "+49 40 8081617770",
//                 "pin": "889553795"
//               }
//             ],
//             "conferenceSolution": {
//               "key": {
//                 "type": "hangoutsMeet"
//               },
//               "name": "Google Meet",
//               "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
//             },
//             "conferenceId": "ceo-behe-ssp",
//             "signature": "AL9oL6WazoB4DN0vp1CiTzQ/GCgi"
//           },
//           "reminders": {
//             "useDefault": true
//           },
//           "eventType": "default"
//         },
//       ]
//     },
//     "headers": {
//       "alt-svc": "h3-29=\":443\"; ma=2592000,h3-T051=\":443\"; ma=2592000,h3-Q050=\":443\"; ma=2592000,h3-Q046=\":443\"; ma=2592000,h3-Q043=\":443\"; ma=2592000,quic=\":443\"; ma=2592000; v=\"46,43\"",
//       "cache-control": "private, max-age=0, must-revalidate, no-transform",
//       "connection": "close",
//       "content-encoding": "gzip",
//       "content-type": "application/json; charset=UTF-8",
//       "date": "Wed, 17 Feb 2021 21:18:40 GMT",
//       "expires": "Wed, 17 Feb 2021 21:18:40 GMT",
//       "server": "ESF",
//       "transfer-encoding": "chunked",
//       "vary": "Origin, X-Origin, Referer",
//       "x-content-type-options": "nosniff",
//       "x-frame-options": "SAMEORIGIN",
//       "x-xss-protection": "0"
//     },
//     "status": 200,
//     "statusText": "OK",
//     "request": {
//       "responseURL": "https://www.googleapis.com/calendar/v3/calendars/fullstackwebdev%40careerfoundry.com/events?timeMin=2021-02-17T21%3A18%3A39.645Z&singleEvents=true&orderBy=startTime"
//     }
//   }


// ]
  
// export { mockData };