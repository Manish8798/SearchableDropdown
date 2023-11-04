import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import SearchableDropDown from './SearchableDropDown';

const App = () => {
  const [sources, setSources] = useState([
    {
      value: 850,
      label: 'Facebook Ads',
    },
    {
      value: 851,
      label: 'Google Ads',
    },
    {
      value: 852,
      label: 'Reference',
    },
    {
      value: 853,
      label: 'Landing Page',
    },
    {
      value: 854,
      label: '99 Acres',
    },
    {
      value: 855,
      label: 'Magicbricks',
    },
    {
      value: 856,
      label: 'Common Floor',
    },
    {
      value: 857,
      label: 'Makaan',
    },
    {
      value: 858,
      label: 'Housing',
    },
    {
      value: 859,
      label: 'Company Website',
    },
    {
      value: 860,
      label: 'Chat',
    },
    {
      value: 861,
      label: 'Newspaper Ad',
    },
    {
      value: 862,
      label: 'Whatsapp',
    },
    {
      value: 863,
      label: 'Other',
    },
    {
      value: 864,
      label: 'Linkedin',
    },
    {
      value: 865,
      label: 'Taboola',
    },
    {
      value: 866,
      label: 'Hoarding',
    },
    {
      value: 867,
      label: 'Pamphlet',
    },
    {
      value: 868,
      label: 'Event',
    },
    {
      value: 869,
      label: 'Radio',
    },
    {
      value: 870,
      label: 'SMS Campaign',
    },
    {
      value: 871,
      label: 'Email Campaign',
    },
    {
      value: 872,
      label: 'Walk In',
    },
    {
      value: 1133,
      label: 'CSV',
    },
    {
      value: 4662,
      label: 'Channel Partner',
    },
  ]);

  const onValueChange = (type, val) => {
    console.log(val);
  };

  return (
    <SafeAreaView>
      <View>
        <SearchableDropDown
          onTextChange={text => console.log(text)}
          //On text change listner on the searchable input
          onItemSelect={item => onValueChange('selectProject', item?.value)}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{padding: 5}}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '60%',
          }}
          items={sources}
          //mapping of item array
          defaultIndex={2}
          //default selected item index
          placeholder="placeholder"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
