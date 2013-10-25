/**
 * Content: �����˺���ʵ�����
 * User: wangbing
 * Date: 12-3-22
 * CreateTime: a.m 9:32
 * UpdateTime:
 * UpdateContent:
 */

/**
���ʵ�壬�� triggeredBy() �����ĵ�һ���������ݵ�ʵ������˺���ͨ�� ig.Entity �� receiveDamage() ������

����֮������Խ�һ�� EntityTrigger ���ӵ� EntityHurt ���򼤻������ʵ�������˺���

Weltmeister ����

damage
	Damage to give to the entity that triggered this entity.
	Ĭ��ֵ��10
*/

ig.module(
    'game.entities.hurt'
).requires(
    'impact.entity'
).defines(function(){
	EntityHurt=ig.Entity.extend(
	{
		_wmDrawBox:true,
		_wmBoxColor:'rgba(255, 0, 0, 0.7)',
		size:{x:8,y:8},
		damage:100,
		triggeredBy:function(entity,trigger)
		{
			entity.receiveDamage(this.damage,this);
		},
		update:function(){}
	});
});