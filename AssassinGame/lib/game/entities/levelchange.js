/**
 * Content: ������һ�ػ���
 * User: wangbing
 * Date: 12-3-22
 * CreateTime: a.m 9:32
 * UpdateTime:
 * UpdateContent:
 */

/**
���ʵ�壬�� triggeredBy() ������ʱ������ ig.game.loadLevel() ��ͨ����ͨ�� EntityTrigger ʵ�壩��

Weltmeister ����

level
	Ҫ���صĹؿ��������硰LevelTest1������ֻ�ǡ�test1���������ء�LevelTest1���ؿ���
*/
ig.module(
    'game.entities.levelchange'
).requires(
    'impact.entity'
).defines(function(){
	EntityLevelchange=ig.Entity.extend(
	{
		_wmDrawBox:true,
		_wmBoxColor:'rgba(0, 0, 255, 0.7)',
		size:{x:8,y:8},
		chooseLevel:null,
		triggeredBy:function(entity,trigger)
		{
			if(this.chooseLevel)
			{
				var levelName=this.chooseLevel.replace(/^(Level)?(\w)(\w*)/,function(m,l,a,b){return a.toUpperCase()+b;});

                //storage.initUnset(levelName,true);
				ig.game.endLevel(ig.global['Level'+levelName]);
			}
		},
		update:function(){}
	});
});
