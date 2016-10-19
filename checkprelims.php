<?php 
$count = 0;
if($_POST["ans1"]!=' ' and $_POST["ans1"]=='c')
	$count++;
if($_POST["ans2"]=='b')
	$count++;
if($_POST["ans3"]=='b')
	$count++;
echo "Your total score is " . $count;
?>