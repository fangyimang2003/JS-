"auto";

launchApp("你的神仙app");
toast("开始你的表演");

while(!id("ivTitleBtnRightImage").exists());

var listParent = className("AbsListView").findOne().parent();
var icons = listParent.child(listParent.childCount() - 2);
icons.child(1).click();
sleep(200);

for(i = 0; i < 1000000;i++){
 className("CheckBox").untilFindOne().click();
 sleep(200);
 id("send_btn").click();
}
//可以与那个啥文本并线程
