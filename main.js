import './style.css'
// 対象時刻が指定された範囲内にあるかどうかを調べる関数
function isTimeInRange(targetTime, startTime, endTime) {
    if (startTime <= endTime) {
        return startTime <= targetTime && targetTime < endTime;
    } else {
        return targetTime >= startTime || targetTime < endTime;
    }
}

// 時刻範囲をチェックする関数
function checkTimeRange() {
    const targetTime = parseInt(document.getElementById('targetTime').value);
    const startTime = parseInt(document.getElementById('startTime').value);
    const endTime = parseInt(document.getElementById('endTime').value);

    // 対象時刻が範囲内にあるかどうかを確認
    const result = isTimeInRange(targetTime, startTime, endTime);

    // 結果を表示
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = result
        ? `${targetTime} 時は指定された範囲内にあります。`
        : `${targetTime} 時は指定された範囲外です。`;
}


// ボタンにイベント(checkTimeRange)リスナーを追加
document.getElementById('checkButton').addEventListener('click', checkTimeRange);