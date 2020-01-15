import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";

import _ from "lodash";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import topCities from "../general/topCities";
import { endpointUrl, apikey } from "../config";

// function loadScript(src, position, id) {
//   if (!position) {
//     return;
//   }

//   const script = document.createElement("script");
//   script.setAttribute("async", "");
//   script.setAttribute("id", id);
//   script.src = src;
//   position.appendChild(script);
// }

// const autocompleteService = { current: null };

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2)
  }
}));

// // export default function GoogleMaps() {
// //   const classes = useStyles();
// //   const [inputValue, setInputValue] = React.useState('');
// //   const [options, setOptions] = React.useState([]);
// //   const loaded = React.useRef(false);

// //   if (typeof window !== 'undefined' && !loaded.current) {
// //     if (!document.querySelector('#google-maps')) {
// //       loadScript(
// //         'https://maps.googleapis.com/maps/api/js?key=AIzaSyBwRp1e12ec1vOTtGiA4fcCt2sCUS78UYc&libraries=places',
// //         document.querySelector('head'),
// //         'google-maps',
// //       );
// //     }

// //     loaded.current = true;
// //   }

// //   const handleChange = event => {
// //     setInputValue(event.target.value);
// //   };

// //   const fetch = React.useMemo(
// //     () =>
// //       throttle((input, callback) => {
// //         autocompleteService.current.getPlacePredictions(input, callback);
// //       }, 200),
// //     [],
// //   );

// //   React.useEffect(() => {
// //     let active = true;

// //     if (!autocompleteService.current && window.google) {
// //       autocompleteService.current = new window.google.maps.places.AutocompleteService();
// //     }
// //     if (!autocompleteService.current) {
// //       return undefined;
// //     }

// //     if (inputValue === '') {
// //       setOptions([]);
// //       return undefined;
// //     }

// //     fetch({ input: inputValue }, results => {
// //       if (active) {
// //         setOptions(results || []);
// //       }
// //     });

// //     return () => {
// //       active = false;
// //     };
// //   }, [inputValue, fetch]);

// //   return (
// //     <Autocomplete
// //       id="google-map-demo"
// //       style={{ width: 300 }}
// //       getOptionLabel={option => (typeof option === 'string' ? option : option.description)}
// //       filterOptions={x => x}
// //       options={options}
// //       autoComplete
// //       includeInputInList
// //       freeSolo
// //       disableOpenOnFocus
// //       renderInput={params => (
// //         <TextField
// //           {...params}
// //           label="Add a location"
// //           variant="outlined"
// //           fullWidth
// //           onChange={handleChange}
// //         />
// //       )}
// //       renderOption={option => {
// //         const matches = option.structured_formatting.main_text_matched_substrings;
// //         const parts = parse(
// //           option.structured_formatting.main_text,
// //           matches.map(match => [match.offset, match.offset + match.length]),
// //         );

// //         return (
// //           <Grid container alignItems="center">
// //             <Grid item>
// //               <LocationOnIcon className={classes.icon} />
// //             </Grid>
// //             <Grid item xs>
// //               {parts.map((part, index) => (
// //                 <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
// //                   {part.text}
// //                 </span>
// //               ))}

// //               <Typography variant="body2" color="textSecondary">
// //                 {option.structured_formatting.secondary_text}
// //               </Typography>
// //             </Grid>
// //           </Grid>
// //         );
// //       }}
// //     />
// //   );
// // }

// const SearchBox = () => {
//   const classes = useStyles();
//   const [inputValue, setInputValue] = React.useState("");
//   const [options, setOptions] = React.useState(["hello","hi","bye"]);
//   const loaded = React.useRef(false);

//   // if (typeof window !== "undefined" && !loaded.current) {
//   //   if (!document.querySelector("#google-maps")) {
//   //     loadScript(
//   //       "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwRp1e12ec1vOTtGiA4fcCt2sCUS78UYc&libraries=places",
//   //       document.querySelector("head"),
//   //       "google-maps"
//   //     );
//   //   }

//   //   loaded.current = true;
//   // }

//   const handleChange = event => {
//     setInputValue(event.target.value);
//   };

//   const fetch = React.useMemo(
//     () =>
//       throttle((input, callback) => {
//         autocompleteService.current.getPlacePredictions(input, callback);
//       }, 200),
//     []
//   );

//   React.useEffect(() => {
//     let active = true;

//     if (!autocompleteService.current && window.google) {
//       autocompleteService.current = new window.google.maps.places.AutocompleteService();
//     }
//     if (!autocompleteService.current) {
//       return undefined;
//     }

//     if (inputValue === "") {
//       setOptions([]);
//       return undefined;
//     }

//     fetch({ input: inputValue }, results => {
//       if (active) {
//         setOptions(results || []);
//       }
//     });

//     return () => {
//       active = false;
//     };
//   }, [inputValue, fetch]);

//   return (
//     <Autocomplete
//       id="google-map-demo"
//       style={{ width: 300 }}
//       getOptionLabel={option =>
//         typeof option === "string" ? option : option.description
//       }
//       filterOptions={x => x}
//       options={options}
//       autoComplete
//       includeInputInList
//       freeSolo
//       disableOpenOnFocus
//       renderInput={params => (
//         <TextField
//           {...params}
//           label="Add a location"
//           variant="outlined"
//           fullWidth
//           onChange={handleChange}
//         />
//       )}
//       renderOption={option => {
//         const matches =
//           option.structured_formatting.main_text_matched_substrings;
//         const parts = parse(
//           option.structured_formatting.main_text,
//           matches.map(match => [match.offset, match.offset + match.length])
//         );

//         return (
//           <Grid container alignItems="center">
//             <Grid item>
//               <LocationOnIcon className={classes.icon} />
//             </Grid>
//             <Grid item xs>
//               {parts.map((part, index) => (
//                 <span
//                   key={index}
//                   style={{ fontWeight: part.highlight ? 700 : 400 }}
//                 >
//                   {part.text}
//                 </span>
//               ))}

//               <Typography variant="body2" color="textSecondary">
//                 {option.structured_formatting.secondary_text}
//               </Typography>
//             </Grid>
//           </Grid>
//         );
//       }}
//     />
//   );
// };

export default function ComboBox(props) {
  const classes = useStyles();
  //here topCities can be replaced with [], topCities is used for a snappier response
  const [options, setOptions] = React.useState(topCities);
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    let active = true;
    if (inputValue === "") {
      return undefined;
    }

    fetch(
      `${endpointUrl}/locations/v1/cities/autocomplete?apikey=${apikey}&q=${inputValue}`
    )
      .then(res => res.json())
      .then(predictionDataArray => {
        if (active) {
          console.log("results are here");
          setOptions(_.unionBy(predictionDataArray, options, "Key"));
        }
      })
      .catch(err => console.log(err));

    return () => {
      active = false;
    };
  }, [inputValue]);

  const handleTextFieldChange = event => {
    setInputValue(event.target.value);
  };
  return (
    <Autocomplete
      className={classes.bar}
      id="combo-box-demo"
      options={options}
      getOptionLabel={option => option.LocalizedName}
      style={{ width: 300 }}
      renderInput={params => (
        <TextField
          {...params}
          label="Search for location"
          variant="outlined"
          onChange={handleTextFieldChange}
          fullWidth
        />
      )}
      renderOption={option => {
        return (
          <Grid
            onClick={() => {
              // console.log(option)
              props.setCityOnDisplay(option);
            }}
            container
            alignItems="center"
          >
            <Grid item>
              <LocationOnIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              <span style={{ fontWeight: 700 }}>{option.LocalizedName}</span>
              <Typography variant="body2" color="textSecondary">
                {option.Country.LocalizedName}
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    />
  );
}
