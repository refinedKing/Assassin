/**
 * Content: ����Ŀ�����
 * User: wangbing
 * Date: 12-3-22
 * CreateTime: a.m 9:32
 * UpdateTime:
 * UpdateContent:
 */

/**
���ʵ��ʲôҲ������ֻ���������������������Ϊ����ʵ���Ŀ�꣬���� movers ��
*/

ig.module(
    'game.entities.void'
).requires(
    'impact.entity'
).defines(function(){
	EntityVoid=ig.Entity.extend(
	{
		_wmDrawBox:true,
		_wmBoxColor:'rgba(128, 28, 230, 0.7)',
		size:{x:8,y:8},
		update:function(){}
	});
});