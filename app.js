const { App } = require('@slack/bolt');

// ボットトークンとソケットモードハンドラーを使ってアプリを初期化します
const app = new App({
  token: "xoxb-2065086554145-3406702458406-jzYgj3etQB9TGFQ1O3ArS2VB",
  signingSecret: "8ec993b0e2932e625e4ac795cc50dbfb"
});

app.message("", async ({ message, say }) => {
    // イベントがトリガーされたチャンネルに say() でメッセージを送信します
    var str = message.text;
    var result0 = str.match(/変/);
    var result1 = str.match(/システム要求/);
    var result2 = str.match(/システム仕様/);
    var result3 = str.match(/機能割り振り/);
    var result4 = str.match(/解決すべき課題/);
    var result5 = str.match(/リスクマネジメントシート/);
    var result6 = str.match(/WBS/);


    if(result1&&result0){
      await say ("システム仕様を変更してくさだい");
      await say(`<@U0213LK0THD>さん\n<@${message.user}>さんがシステム要求を変更しました`);
    }

    else if(result2&&result0){
       await say("WBSを変えてください");
       await say(`<@U0213LK0THD>さん\n<@${message.user}>さんがシステム仕様を変更しました`);
    }

    else if(result3&&result0){
      await say("WBSを変えてください");
      await say(`<@U0213LK0THD>さん\n<@${message.user}>さんが機能割り振りを変更しました`);
    }

    else if(result4&&result0){
      await say("WBSを変えてください");
      await say(`<@U0213LK0THD>さん\n<@${message.user}>さんがWBSを変更しました`);
    }

    else if(result5&&result0){
      await say("WBSを変えてください");
      await say(`<@U0213LK0THD>さん\n<@${message.user}>さんがリスクマネジメントシートを変更しました`);
    }

    else if(result6&&result0){
      await say("リスクマネジメントシートを変えてください");
      await say(`<@U0213LK0THD>さん\n<@${message.user}>さんがを変更しました`);
    }
    //await say(`Hey there <@${message.text}>!`);
  });


(async () => {
  // アプリを起動します
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();