import React from 'react';
import { Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function SearchBar(props) {
    return (
        <View style={{ flexDirection : "row" , paddingTop : 15}}>

                <GooglePlacesAutocomplete placeholder='search' styles={{

                    textInput : {
                        backgroundColor : "#eee",
                        fontWeight : "700",
                        borderRadius : 15,
                        marginTop : 7,

                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius : 50,
                        flexDirection : "row",
                        alignItems : "center"
                      },
                }} 

                renderLeftButton={() => (
                    <View>
                        
                    </View>
                )}
                
                renderRightButton={() => (
                  <View style={{ marginRight : 8}}>
                      <Text>Search</Text>
                  </View>
                )} />

        </View>
     
    );
}

export default SearchBar;