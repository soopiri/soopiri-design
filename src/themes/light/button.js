const Primary = {
  backgroundColor: '#20BDBE',
  color: '#FFFFFF',
  focus: {
    backgroundColor: '#20BDBE',
    color: '#FFFFFF',
  },
  hover: {
    backgroundColor: '#39CACB',
    color: '#FFFFFF',
    borderColor: '#39CACB',
    boxShadow: '0px 0px 6px rgba(32, 189, 190, 0.5)',
  },
  active: {
    backgroundColor: '#039494',
  },
  disabled: {
    backgroundColor: '#20BDBE',
    color: '#FFFFFF',
    borderColor: '#20BDBE',
  },
};
const Cancel = {
  backgroundColor: 'transparent',
  color: '#869BAB',
  border: '1.5px solid #B0BFCC',
  focus: {
    backgroundColor: 'transparent',
    color: '#869BAB',
    border: '1.5px solid #B0BFCC',
  },
  hover: {
    backgroundColor: '#FFFFFF',
    color: '#869BAB',
    boxShadow: '0px 0px 6px rgba(179, 191, 200, 0.5)',
    border: '1.5px solid #B0BFCC',
  },
  active: {
    backgroundColor: '#D3DDE6',
  },
  disabled: {
    backgroundColor: 'transparent',
    color: '#869BAB',
    border: '1.5px solid #B0BFCC',
  },
};
const Default = {
  backgroundColor: '#B1C0CC',
  color: '#FFFFFF',
  focus: {
    backgroundColor: '#B1C0CC',
    color: '#FFFFFF',
  },
  hover: {
    backgroundColor: '#506171',
    color: '#FFFFFF',
    boxShadow: '0px 0px 6px rgba(26, 26, 26, 0.5)',
    borderColor: '#506171',
  },
  active: {
    backgroundColor: '#364352',
  },
  disabled: {
    backgroundColor: '#B1C0CC',
    color: '#FFFFFF',
    borderColor: '#B1C0CC',
  },
};
export default {
  borderRadius: '20px',
  Primary,
  Cancel,
  Default,
};
