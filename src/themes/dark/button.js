const Primary = {
  backgroundColor: '#20BDBE',
  color: '#000825',
  focus: {
    backgroundColor: '#20BDBE',
    color: '#000825'
  },
  hover: {
    backgroundColor: '#2CDBDD',
    color: '#000825',
    borderColor: '#20BDBE',
    boxShadow: '0px 0px 6px rgba(32, 189, 190, 0.5)'
  },
  active: {
    backgroundColor: '#039494'
  },
  disabled: {
    backgroundColor: '#20BDBE',
    color: '#000825',
    borderColor: '#20BDBE'
  }
}
const Cancel = {
  backgroundColor: 'transparent',
  color: '#869BAB',
  border: '1.5px solid #5F6F7F',
  focus: {
    backgroundColor: 'transparent',
    color: '#869BAB',
    border: '1.5px solid #5F6F7F'
  },
  hover: {
    backgroundColor: '#2A3440',
    color: '#AAC6DC',
    boxShadow: '0px 0px 6px rgba(109, 124, 135, 0.5)',
    border: '1.5px solid #89A6C1'
  },
  active: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  disabled: {
    backgroundColor: '#2A3440',
    color: '#869BAB',
    borderColor: '#869BAB'
  }
}
const Default = {
  backgroundColor: '#3F4F5E',
  color: '#D5E0E9',
  focus: {
    backgroundColor: '#3F4F5E',
    color: '#D5E0E9'
  },
  hover: {
    backgroundColor: '#506171',
    color: '#D5E0E9',
    boxShadow: '0px 0px 6px rgba(26, 26, 26, 0.5)',
    borderColor: '#506171'
  },
  active: {
    backgroundColor: '#364352'
  },
  disabled: {
    backgroundColor: '#3F4F5E',
    color: '#D5E0E9',
    borderColor: '#3F4F5E'
  }
}
export default {
  borderRadius: '4px',
  Primary,
  Cancel,
  Default
}
