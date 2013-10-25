/**
 * Content: ����������
 * User: wangbing
 * Date: 12-3-22
 * CreateTime: a.m 9:32
 * UpdateTime:
 * UpdateContent:
 */

/**
���ʵ���������ÿһ��Ŀ��� triggeredBy( entity, trigger ) ������
#entity# �Ǵ����˴�������ʵ�壬�� #trigger# �Ǵ���������

Weltmeister ����

checks
	�涨�ĸ����͵�ʵ����Դ��������������A��B �� BOTH ��
	Ĭ��ֵ��A

wait
	�����������ٴα�����������������Ϊ -1 ��ָ��Ϊ���Ӳ��������紥����ֻ�ܱ�����һ�Ρ�
	Ĭ��ֵ��-1
	
target.1, target.2 ... target.n
	triggeredBy() ���������õ�ʵ������
*/

ig.module(
    'game.entities.trigger'
).requires(
    'impact.entity'
).defines(function(){
	EntityTrigger=ig.Entity.extend(
	{
		size:{x:16,y:16},// Ĭ�ϴ�С
		_wmScalable:true,//�����ڵ�ͼ�༭����ʵ���С�ܷ�ı�
		_wmDrawBox:true,//�����ڵ�ͼ�༭�����ʵ��ĺ�������
		_wmBoxColor:'rgba(196, 255, 0, 0.7)',//�����ڵ�ͼ�༭�����ʵ��ĺ������ε���ɫ
		target:null,
		delay:-1,//�����ӳ�������-1Ϊֻ����һ��
		delayTimer:null,//�ӳ�ʱ��
		canFire:true,
		type:ig.Entity.TYPE.NONE,
		checkAgainst:ig.Entity.TYPE.A,//���崥��ʵ�����ײ�������
		collides:ig.Entity.COLLIDES.NEVER,//�������е���ײ����������ʵ��ӵ��������ײģʽ
        damage:1000,
		init:function(x,y,settings)
		{
			if(settings.checks)
			{
				this.checkAgainst=ig.Entity.TYPE[settings.checks.toUpperCase()]||ig.Entity.TYPE.A;
				delete settings.check;
			}
			this.parent(x,y,settings);
			this.delayTimer=new ig.Timer();//��������
		},
		check:function(other)//��ײ���
		{
			if(this.canFire&&this.delayTimer.delta()>=0)//
			{
				if(typeof(this.target)=='object')//�������Ƿ����
				{
					for(var t in this.target)//�������й�����������ʵ��
					{
						var ent=ig.game.getEntityByName(this.target[t]);//ͨ�����ƻ�ȡʵ��
						if(ent&&typeof(ent.triggeredBy)=='function')
						{
							ent.triggeredBy(other,this);//�ص�����ʵ���triggeredBy����
						}
					}
				}
				if(this.delay==-1){this.canFire=false;}
				else{this.delayTimer.set(this.delay);}//
			}
		},
		update:function(){}
	});
});
