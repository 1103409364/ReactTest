<?php
	header('Content-type:text/html;charset=utf-8');
	$id = $_GET["id"];
	//链接数据库
	$conn = mysql_connect("localhost", "qwertyzx_admin", "admin");
	//选择数据库
	mysql_select_db("qwertyzx_1",$conn);
	//设置字符集
	mysql_query("SET NAMES UTF8");
	
	// 删除数据库中的数据，实际工作中很少删除数据，可以添加一个标记表示删除
	// 删除表messageboard中id为$id的数据
	$result = mysql_query("DELETE FROM messageboard WHERE id = {$id}");
	 
	if($result == 1){
		echo "ok";
	}else{
		echo "wrong";
	}
	mysql_close($conn);
?>