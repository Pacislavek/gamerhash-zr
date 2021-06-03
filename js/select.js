function formatState(state) {
  if (!state.id) {
    return state.text;
  }
  var baseUrl = "img/cryptocurrency";
  var $state = $(
    '<div style="display:flex; flex-direction: row; align-items: center; justify-content: space-between"><span style="font-weight: 600; color: #181B1F;"><img style="margin-right: 15px;" src="' + baseUrl + '/crypto-' + state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span><div><span style="margin-right: 10px; color: #181B1F;">' + state.bitcoinValue + 'BTC' + '</span><span style="color=#737373;">' + state.usdValue + 'USD' + '</span></div></div>'
  );

  return $state;
};

var data = [
  {
    id: 1,
    text: 'bitcoin (BTC)',
    bitcoinValue: '0,48',
    usdValue: '3925.36'
      },
  {
    id: 2,
    text: 'GUSD',
    bitcoinValue: '0,48',
    usdValue: '3925.36'

      },
  {
    id: 3,
    text: 'liteCoin (LTC)',
    bitcoinValue: '0,48',
    usdValue: '3925.36'
      },
    ];


$(".crypto-currency").select2({
  data: data,
  templateResult: formatState,
  templateSelection: formatState
});
